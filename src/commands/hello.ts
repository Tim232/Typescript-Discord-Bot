import { Message } from 'discord.js'
import Client from '../classes/Client'

export default function (client: Client, msg: Message) {
  msg.channel.send('hello!')
}

export const aliases = ['', 'ㅎㅇ', '안녕']
