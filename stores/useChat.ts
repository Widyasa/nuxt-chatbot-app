import ollama from 'ollama'
import type {Chat} from "~/interfaces/Chat";
export const useChat = defineStore('useChatStore', {
    state: () => ({
        chats: [] as Chat[],
        messages: ref(''),
        response: ref('')
    }),
    actions: {
        async chat(question:string) {
            const message = {role: 'user', content: question}
            this.messages = question
            const response:any = await ollama.chat({
                model: 'ishumilin/deepseek-r1-coder-tools:8b',
                messages: [message],
                stream:true
            })
            for await (const item of response) {
                this.response += item.message.content
            }
            this.chats.push({
                question: question,
                response: this.response
            })
            this.messages = ''
            this.response = ''
        }
    }
})