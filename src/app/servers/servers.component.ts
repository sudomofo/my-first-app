import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created.";
  serverCreated: boolean = false;
  serverName = 'test server';
  servers = ['Testserver', 'Testserver 2'];
  // userName = '';
  tunaToggle = false;
  log = [];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created.' + this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  tunaCreate() {
    this.tunaToggle = !this.tunaToggle;
    this.log.push(this.log.length + 1 + ' ' + new Date());
  }
}
