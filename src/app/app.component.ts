import { Component } from '@angular/core';
import {
  faTrophy,
  faFlagCheckered,
  faForward,
  faArchive
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game-On';
  faTrophy = faTrophy;
  faFlagCheckered = faFlagCheckered;
  faForward = faForward;
  faArchive = faArchive;

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
