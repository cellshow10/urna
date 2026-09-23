/* =====================================================================
   CONFIGURACAO DO FIREBASE — Simulador de Urna Eletronica (WF Tecnology)
   =====================================================================
   Este arquivo e o UNICO lugar onde as credenciais do Firebase devem
   ficar. Nao copie/cole essas chaves dentro do index.html.

   COMO CONFIGURAR:
   1) Crie um projeto em https://console.firebase.google.com
   2) No menu lateral, ative o "Realtime Database" (Realtime Database,
      NAO Firestore) e crie o banco. A URL do banco aparece no topo da
      tela — algo como https://SEU-PROJETO-default-rtdb.firebaseio.com
      ou https://SEU-PROJETO-default-rtdb.southamerica-east1.firebasedatabase.app
      Copie ESSA URL para o campo databaseURL abaixo — sem ele, a
      sincronizacao simplesmente NAO FUNCIONA (este era o bug mais
      grave do sistema anterior).
   3) Va em " Configuracoes do projeto > Geral > "Seus apps" > Web (</>)
      e copie o objeto de configuracao gerado para o lugar do exemplo
      abaixo.
   4) Publique este arquivo junto com index.html na mesma pasta.
      O HTML ja referencia: <script src="firebase-config.js"></script>

   USANDO A MESMA CONTA FIREBASE EM VARIAS URNAS/EVENTOS:
   De um URNA_ID diferente para cada copia do simulador — os dados
   ficam isolados automaticamente em "urnas/<URNA_ID>/..." no banco.

   SEM CONFIGURAR: o simulador funciona normalmente, 100% offline,
   salvo apenas no navegador (localStorage).
   ===================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyASLlHLltpbIJDvJrPiA7B-oPssHvJAY5M",
  authDomain: "urna-d7d26.firebaseapp.com",
  // >>> OBRIGATORIO para o Realtime Database funcionar <<<
  // Pegue a URL exata em: Console Firebase > Realtime Database > topo da pagina.
  databaseURL: "https://urna-d7d26-default-rtdb.firebaseio.com",
  projectId: "urna-d7d26",
  storageBucket: "urna-d7d26.firebasestorage.app",
  messagingSenderId: "639452998720",
  appId: "1:639452998720:web:bde51dda19f156ee3683a5"
};


// ID desta urna/instancia dentro do banco de dados. Mude este valor para
// cada urna diferente que usar o MESMO projeto Firebase.
const URNA_ID = 'padrao';
