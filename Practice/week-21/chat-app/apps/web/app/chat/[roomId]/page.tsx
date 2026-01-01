import { TextInput } from "@repo/ui/text-input";
export default function ChatRoom() {
    return (
        <>
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column"
            }}>

           

            <div>
                <h2 >💬 Chat Room</h2>

                <div >
                    <p >Welcome to the chat 👋</p>
                    <p >
                        Start a conversation 🚀
                    </p>
                </div>
            </div>

            <div>
                <div >
                    <TextInput placeholder="Type your message..." />
                   
                </div>
            </div>
             </div>
        </>
    );
}
