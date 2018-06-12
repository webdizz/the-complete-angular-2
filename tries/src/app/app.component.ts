import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max'

  showSecret = false
  log = []

  serverElements = [{ type: 'server', name: 'TestServer', content: 'Just a test!' }]
  
  onToggleDetails() {
    this.showSecret = !this.showSecret
    this.log.push(new Date())
  }
}
