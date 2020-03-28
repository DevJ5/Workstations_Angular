import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})

export class ContainersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = "my-server";
  serverCreated: boolean = false;
  servers = ['Dev', 'Test', 'Prod'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(event: MouseEvent) {
    console.log((<HTMLInputElement>event.target));
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
}
