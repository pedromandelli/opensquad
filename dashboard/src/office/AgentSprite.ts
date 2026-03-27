import Phaser from 'phaser';
import { avatarKeys, DESK_KEYS, type CharacterName } from './assetKeys';
import { COLORS } from './palette';
import type { Agent, AgentStatus } from '@/types/state';

// Avatar display size (original is 960x640, scale to fit ~32px wide)
const AVATAR_SCALE = 32 / 960;

// Status → badge color mapping
const STATUS_COLORS: Record<AgentStatus, number> = {
  idle: COLORS.statusIdle,
  working: COLORS.statusWorking,
  done: COLORS.statusDone,
  checkpoint: COLORS.statusCheckpoint,
  delivering: COLORS.statusWorking,
};

export class AgentSprite {
  private scene: Phaser.Scene;
  private desk: Phaser.GameObjects.Image;
  private avatar: Phaser.GameObjects.Image;
  private nameText: Phaser.GameObjects.Text;
  private badgeBg: Phaser.GameObjects.Graphics;
  private badgeDot: Phaser.GameObjects.Graphics;
  private animTimer?: Phaser.Time.TimerEvent;
  private agent: Agent;
  private characterName: CharacterName;
  private deskVariant: 'black' | 'white';

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    characterName: CharacterName,
    deskVariant: 'black' | 'white',
    agent: Agent,
  ) {
    this.scene = scene;
    this.agent = agent;
    this.characterName = characterName;
    this.deskVariant = deskVariant;

    const deskKey = this.getDeskKey(agent.status);
    this.desk = scene.add.image(x, y, deskKey).setOrigin(0.5, 0.5);
    this.desk.setDepth(y);

    const avatarKey = this.getAvatarKey(agent.status);
    this.avatar = scene.add.image(x, y - 20, avatarKey)
      .setOrigin(0.5, 1)
      .setScale(AVATAR_SCALE);
    this.avatar.setDepth(y + 1);

    this.badgeBg = scene.add.graphics();
    this.badgeDot = scene.add.graphics();

    this.nameText = scene.add.text(x, y + 20, agent.name, {
      fontFamily: 'monospace',
      fontSize: '7px',
      color: '#ffffff',
      align: 'center',
    }).setOrigin(0.5, 0);
    this.nameText.setDepth(y + 10);

    this.drawBadge(x, y + 20, agent);
    this.startAnimation(agent.status);
  }

  private getDeskKey(status: AgentStatus): string {
    const variant = this.deskVariant;
    if (status === 'working' || status === 'delivering') {
      return variant === 'black' ? DESK_KEYS.blackCoding : DESK_KEYS.whiteCoding;
    }
    return variant === 'black' ? DESK_KEYS.blackIdle : DESK_KEYS.whiteIdle;
  }

  private getAvatarKey(status: AgentStatus): string {
    const keys = avatarKeys(this.characterName);
    switch (status) {
      case 'working':
      case 'delivering':
        return keys.talk;
      case 'done':
        return keys.wave1;
      default:
        return keys.blink;
    }
  }

  private drawBadge(x: number, y: number, agent: Agent): void {
    const textW = this.nameText.width;
    const badgeW = textW + 16;
    const badgeH = 12;
    const badgeX = x - badgeW / 2;

    this.badgeBg.fillStyle(COLORS.nameCardBg, 0.85);
    this.badgeBg.fillRoundedRect(badgeX, y - 1, badgeW, badgeH, 3);
    this.badgeBg.setDepth(y + 9);

    const dotColor = STATUS_COLORS[agent.status] ?? COLORS.statusIdle;
    this.badgeDot.fillStyle(dotColor, 1);
    this.badgeDot.fillCircle(badgeX + 5, y + badgeH / 2 - 1, 2);
    this.badgeDot.setDepth(y + 11);
  }

  private startAnimation(status: AgentStatus): void {
    const keys = avatarKeys(this.characterName);

    if (status === 'working' || status === 'delivering') {
      let frame = 0;
      this.animTimer = this.scene.time.addEvent({
        delay: 500,
        loop: true,
        callback: () => {
          frame = (frame + 1) % 2;
          this.avatar.setTexture(frame === 0 ? keys.talk : keys.blink);
        },
      });
    } else if (status === 'done') {
      let frame = 0;
      let waveCount = 0;
      this.animTimer = this.scene.time.addEvent({
        delay: 400,
        loop: true,
        callback: () => {
          if (waveCount < 4) {
            frame = (frame + 1) % 2;
            this.avatar.setTexture(frame === 0 ? keys.wave1 : keys.wave2);
            waveCount++;
          } else {
            this.avatar.setTexture(keys.blink);
            this.animTimer?.destroy();
          }
        },
      });
    } else {
      this.animTimer = this.scene.time.addEvent({
        delay: 2000 + Math.random() * 2000,
        loop: true,
        callback: () => {
          this.avatar.setTexture(keys.talk);
          this.scene.time.delayedCall(200, () => {
            this.avatar.setTexture(keys.blink);
          });
        },
      });
    }
  }

  updateStatus(agent: Agent): void {
    if (this.agent.status === agent.status) return;
    this.agent = agent;

    this.desk.setTexture(this.getDeskKey(agent.status));
    this.avatar.setTexture(this.getAvatarKey(agent.status));

    this.animTimer?.destroy();
    this.startAnimation(agent.status);

    this.badgeDot.clear();
    const dotColor = STATUS_COLORS[agent.status] ?? COLORS.statusIdle;
    this.badgeDot.fillStyle(dotColor, 1);
    const badgeX = this.nameText.x - (this.nameText.width + 16) / 2;
    this.badgeDot.fillCircle(badgeX + 5, this.nameText.y + 5, 2);
  }

  destroy(): void {
    this.animTimer?.destroy();
    this.desk.destroy();
    this.avatar.destroy();
    this.nameText.destroy();
    this.badgeBg.destroy();
    this.badgeDot.destroy();
  }
}
