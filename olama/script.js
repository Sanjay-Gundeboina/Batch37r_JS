    const chatBox = document.getElementById('chat-box');
    const promptInput = document.getElementById('prompt');
    const sendBtn = document.getElementById('send-btn');

    async function sendMessage() {
      const prompt = promptInput.value.trim();
      if (!prompt) return;

      appendMessage('user', prompt);
      promptInput.value = '';
      sendBtn.disabled = true;

      const botDiv = document.createElement('div');
      botDiv.classList.add('message', 'bot');
      botDiv.textContent = '';
      chatBox.appendChild(botDiv);
      chatBox.scrollTop = chatBox.scrollHeight;

      try {
        const res = await fetch('http://localhost:11434/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'llama3.2:1b',
            prompt: prompt,
            stream: true
          })
        });

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        let buffer = '';
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          buffer += chunk;

          const lines = buffer.split('\n');
          buffer = lines.pop(); // Keep last incomplete

          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const json = JSON.parse(line);
              botDiv.textContent += json.response || '';
              chatBox.scrollTop = chatBox.scrollHeight;
            } catch (err) {
              console.warn('Skipping non-JSON line:', line);
            }
          }
        }

      } catch (err) {
        botDiv.textContent = '[Error connecting to Ollama]';
        console.error(err);
      }

      sendBtn.disabled = false;
    }

    function appendMessage(sender, text) {
      const div = document.createElement('div');
      div.classList.add('message', sender);
      div.textContent = text;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    promptInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
