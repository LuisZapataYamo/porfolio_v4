import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TerminalEntry {
  type: 'command' | 'status' | 'output';
  prompt?: string;
  text: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-hero-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-terminal.component.html',
  styleUrls: ['./hero-terminal.component.scss'],
})
export class HeroTerminalComponent implements OnInit {
  terminalEntries: TerminalEntry[] = [
    { type: 'command', prompt: 'archäroot:~$', text: 'boot --verbose -- kernel=architect-os' },
    { type: 'status', text: '[ OK ] Initializing core logic modules...' },
    { type: 'status', text: '[ OK ] Loading distributed state machines...' },
    { type: 'status', text: '[ OK ] Calibrating concurrency inhibitors...' },
    { type: 'status', text: '[ OK ] Mounting /dev/sd-portfolio' },
    { type: 'command', prompt: 'archäroot:~$', text: 'whoami', highlight: true },
    { type: 'output', text: '> Ingenious architect of backend ecosystems.' },
    { type: 'output', text: '> Turning complexity into scalable simplicity.' },
  ];

  @ViewChild('terminalShell', { static: false }) terminalShell?: ElementRef<HTMLDivElement>;

  visibleLines: TerminalEntry[] = [];
  currentTypingLine: TerminalEntry | null = null;
  typedCommand = '';
  cursorActive = false;
  showFinalPrompt = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) {}

  ngOnInit() {
    this.runTerminalSequence(0);
  }

  private runTerminalSequence(index: number): void {
    if (index >= this.terminalEntries.length) {
      this.zone.run(() => {
        this.cursorActive = false;
        this.showFinalPrompt = true;
        this.cdr.detectChanges();
      });
      return;
    }

    const entry = this.terminalEntries[index];

    if (entry.type === 'command') {
      this.currentTypingLine = entry;
      this.typedCommand = '';
      this.cursorActive = true;

      this.typeCommand(entry.text, () => {
        this.zone.run(() => {
          this.visibleLines = [...this.visibleLines, entry];
          this.currentTypingLine = null;
          this.cursorActive = false;
          this.cdr.detectChanges();
          this.scrollTerminal();
        });
        setTimeout(() => this.runTerminalSequence(index + 1), 500);
      });
    } else {
      setTimeout(() => {
        this.zone.run(() => {
          this.visibleLines = [...this.visibleLines, entry];
          this.cdr.detectChanges();
          this.scrollTerminal();
        });
        this.runTerminalSequence(index + 1);
      }, 350);
    }
  }

  private typeCommand(text: string, done: () => void): void {
    let charIndex = 0;
    const typeNext = () => {
      if (charIndex <= text.length) {
        this.typedCommand = text.slice(0, charIndex);
        charIndex += 1;
        this.cdr.detectChanges(); // <- agrega esto: repinta en cada letra
        const isSpace = text[charIndex - 1] === ' ';
        const delay = isSpace ? 60 : 25 + Math.random() * 45;
        setTimeout(typeNext, delay);
      } else {
        done();
      }
    };
    typeNext();
  }

  private scrollTerminal(): void {
    if (!this.terminalShell) {
      return;
    }

    const el = this.terminalShell.nativeElement;
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  }
}
