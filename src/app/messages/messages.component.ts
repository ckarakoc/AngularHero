import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MessageService } from "../message.service";

@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [
    CommonModule,
  ],
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
  }

}
