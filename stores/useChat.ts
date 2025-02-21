import ollama from 'ollama'
import type {Chat} from "~/interfaces/Chat";
import type {AllChat} from "~/interfaces/AllChat";
import {defineStore} from "pinia";
export const useChat = defineStore('useChatStore', {
    state: () => ({
        allChat: [] as AllChat[],
        chats: [] as Chat[],
        chat: {} as AllChat,
        messages: ref(''),
        answer: ref(''),
        isLoading: ref(false),
        isResponding: ref(false),
        selectedId: ref(null),

    }),
    actions: {
        async getAllChat() {
            this.allChat = await $fetch('/api/chat/');
        },
        async getChatById() {
            this.chat = await $fetch(`/api/chat/${this.selectedId}`);
        },
        async createChat() {
            try {
                const response = await $fetch('/api/chat/create', {
                    method: 'POST',
                    body: {name: 'new chat'}
                })
                await this.getAllChat()
                await navigateTo(`/${response.id}`)
            } catch (e) {
                console.log(e)
                return e
            }
        },
        async deleteChat() {
            try {
                await $fetch(`/api/chat/${this.selectedId}`, {
                    method: 'DELETE',
                })
                await this.getAllChat()
                const route = useRoute()
                if (route.params.id === this.selectedId) {
                    await navigateTo(`/`)
                }
                this.selectedId = null
            } catch (e) {
                console.log(e)
                return e
            }
        },
        async updateChat(data:string) {
            try {

                await $fetch(`/api/chat/${this.selectedId}`, {
                    method: 'PATCH',
                    body : {name: data}
                })
                await this.getAllChat()
                this.selectedId = null
            } catch (e) {
                console.log(e)
                return e
            }
        },
        async getMessagesByChat() {
            const route = useRoute()
          this.chats = await $fetch(`/api/message/${route.params.id}`)
        },
        async chat(question:string) {
            this.isLoading = true
            this.isResponding = true
            const message = {role: 'user', content: question}
            this.messages = question.trim()
            const response:any = await ollama.chat({
                model: 'deepseek-r1:1.5b',
                messages: [message],
                stream:true
            })
            this.isLoading = false
            const route = useRoute()
            for await (const item of response) {
                this.answer += item.message.content
            }
            const newData = await $fetch('/api/message/create', {
                method: 'POST',
                body: {
                    question: question,
                    answer: this.answer,
                    chat_id: route.params.id
                }
            })
            await this.getMessagesByChat()
            this.messages = ''
            this.answer = ''
            this.isResponding = false
        }
    }
})