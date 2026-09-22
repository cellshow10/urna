/* =====================================================================
   CONFIGURAÇÃO DO FIREBASE — Simulador de Urna Eletrônica (WF Tecnology)
   =====================================================================
   Este arquivo é o ÚNICO lugar onde as credenciais do Firebase devem
   ficar. Não copie/cole essas chaves dentro do urna-simulador.html.

   COMO CONFIGURAR:
   1) Crie um projeto em https://console.firebase.google.com
   2) No menu lateral, ative o "Realtime Database" (pode começar em modo
      de teste; depois configure regras de segurança adequadas).
   3) Vá em ⚙️ Configurações do projeto → Geral → "Seus apps" → Web (</>)
      e copie o objeto de configuração gerado para o lugar do exemplo
      abaixo.
   4) Publique este arquivo junto com urna-simulador.html na mesma pasta
      (mesmo servidor/hospedagem). O HTML já referencia:
        <script src="firebase-config.js"></script>

   USANDO A MESMA CONTA FIREBASE EM VÁRIAS URNAS/EVENTOS:
   Se quiser reaproveitar o mesmo projeto Firebase para mais de uma urna
   (por exemplo, uma para cada escola/evento) sem misturar os votos,
   basta dar um URNA_ID diferente para cada cópia do simulador — os
   dados ficam isolados automaticamente em "urnas/<URNA_ID>/..." dentro
   do banco.

   SEM CONFIGURAR: o simulador funciona normalmente, 100% offline, salvo
   apenas no navegador (localStorage) — o Firebase é só uma camada extra
   opcional de sincronização entre dispositivos.
   ===================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyASLlHLltpbIJDvJrPiA7B-oPssHvJAY5M",
  authDomain: "urna-d7d26.firebaseapp.com",
  projectId: "urna-d7d26",
  storageBucket: "urna-d7d26.firebasestorage.app",
  messagingSenderId: "639452998720",
  appId: "1:639452998720:web:bde51dda19f156ee3683a5",
  measurementId: "G-TNJ7FE3MPJ"
};


// ID desta urna/instância dentro do banco de dados. Mude este valor para
// cada urna diferente que usar o MESMO projeto Firebase, evitando que os
// candidatos/votos de uma se misturem com os de outra.
const URNA_ID = 'padrao';
