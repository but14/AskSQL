import { Component } from '@angular/core';
import { ChatboxComponent } from "../../components/chatbox/chatbox.component";

import { InputchatComponent } from "../../components/inputchat/inputchat.component";

@Component({
  selector: 'app-chat',
  imports: [ChatboxComponent, InputchatComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}
