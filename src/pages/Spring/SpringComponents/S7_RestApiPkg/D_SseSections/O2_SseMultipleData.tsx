/*
/spring/rest/sse#2.SSEMultipleData
SSE Multiple Data --> (SPRING)(rest)(SSE)
*/

import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_SseMultipleData = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Let’s build a full Spring Boot example using an SseEmiterStore component to manage all connected clients. <br />
        This approach is clean, scalable, and separates SSE management from your controller logic. We’ll include:
        <ULdisc>
          <Li>SseEmiterStore component</Li>
          <Li>Controller to connect clients</Li>
          <Li>Broadcast/personalized messages</Li>
          <Li>Client-side JS example</Li>
        </ULdisc>
        <div className="text-xl font-semibold">5. How It Works</div>
        <ULDecimal>
          <Li>Clients connect to /connect?clientId=xyz.</Li>
          <Li>
            <SpanGrey>SseEmiterStore</SpanGrey> keeps track of all emitters in a thread-safe map.
          </Li>
          <Li>You can send personal messages to a client or broadcast to all.</Li>
          <Li>Each client can listen to different event types (personal-message, broadcast-message).</Li>
        </ULDecimal>
        ✅ This setup is clean, reusable, and lets you scale by moving SSE logic into the SSEStore component.
        <article className="my-4 text-2xl font-semibold">✅SSEStore Component</article>
        <JavaHighlight javaCode={sse_store_component}></JavaHighlight>
        <article className="my-4 text-2xl font-semibold">Controller</article>
        <JavaHighlight javaCode={controller}></JavaHighlight>
        <article className="my-4 text-2xl font-semibold">✅Client Side (JavaScript)</article>
        <JavaHighlight javaCode={client}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O2_SseMultipleData;

const sse_store_component = `import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Component
public class SseEmiterStore {

    private final ConcurrentMap<String, SseEmitter> clients = new ConcurrentHashMap<>();

    public SseEmitter addClient(String clientId) {
        SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
        clients.put(clientId, emitter);

        emitter.onCompletion(() -> clients.remove(clientId));
        emitter.onTimeout(() -> clients.remove(clientId));
        emitter.onError((e) -> clients.remove(clientId));

        return emitter;
    }

    public void sendMessage(String clientId, String eventName, Object data) {
        SseEmitter emitter = clients.get(clientId);
        if (emitter != null) {
            try {
                emitter.send(SseEmitter.event()
                        .name(eventName)
                        .data(data));
            } catch (IOException e) {
                clients.remove(clientId);
            }
        }
    }

    public void broadcast(String eventName, Object data) {
        clients.forEach((id, emitter) -> {
            try {
                emitter.send(SseEmitter.event()
                        .name(eventName)
                        .data(data));
            } catch (IOException e) {
                clients.remove(id);
            }
        });
    }
}
`;

const controller = `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
public class SSEController {

    private final SseEmiterStore sseEmiterStore;

    public SSEController(SseEmiterStore sseEmiterStore) {
        this.sseEmiterStore = sseEmiterStore;
    }

    // Client connects here
    @GetMapping("/connect")
    public SseEmitter connect(@RequestParam String clientId) {
        return sseEmiterStore.addClient(clientId);
    }

    // Send message to a single client
    @GetMapping("/send")
    public String send(@RequestParam String clientId, @RequestParam String message) {
        sseEmiterStore.sendMessage(clientId, "personal-message", message);
        return "Sent to " + clientId;
    }

    // Broadcast message to all clients
    @GetMapping("/broadcast")
    public String broadcast(@RequestParam String message) {
        sseEmiterStore.broadcast("broadcast-message", message);
        return "Broadcast sent to all clients";
    }
}
`;

const client = `<!DOCTYPE html>
<html>
<head>
    <title>SSE Demo</title>
</head>
<body>
<h1>SSE Client</h1>
<div id="messages"></div>

<script>
    const clientId = prompt("Enter your client ID:");
    const evtSource = new EventSource(\`/connect?clientId=\${clientId}\`);

    evtSource.addEventListener("personal-message", event => {
        const div = document.getElementById("messages");
        div.innerHTML += \`<p>Personal: \${event.data}</p>\`;
    });

    evtSource.addEventListener("broadcast-message", event => {
        const div = document.getElementById("messages");
        div.innerHTML += \`<p>Broadcast: \${event.data}</p>\`;
    });

    evtSource.onerror = err => console.error("SSE Error:", err);
</script>
</body>
</html>
`;
