# 🥋 BJJ Flow Planner
**Domine seu jogo, mapeie sua evolução.**

O **BJJ Flow Planner** é um sistema de gestão de performance para praticantes de Brazilian Jiu-Jitsu. Diferente de um diário comum, ele utiliza conceitos de **Retenção Espaçada** e **Mapeamento de Fluxo** para ajudar o atleta a visualizar seu *Gameplan* e nunca mais esquecer os detalhes técnicos do treino.

---

## 🚀 Funcionalidades Principais

### 📝 Diário de Treino Inteligente
* **Registro Assistido:** Adicione posições praticadas no dia com busca inteligente no banco de dados global ou pessoal.
* **Feedback de Sparring:** Campo específico para anotar dificuldades em rolos, gerando insights sobre lacunas na sua defesa.

### 🧠 Algoritmo de Retenção (Spaced Repetition)
* O sistema identifica técnicas "esquecidas" e gera lembretes automáticos para você revisar posições que não pratica há algum tempo (ex: "Você não treina Triângulo há 15 dias").

### 🗺️ Visualizador de GamePlan (Mind Map)
* Ferramenta visual para conectar suas posições favoritas e criar fluxos de luta (ex: *De la Riva -> Raspagem Balão -> Montada -> Finalização*).

### 📊 Análise de Estilo
* Classificação automática entre **Guardeiro**, **Passador** ou **Híbrido** com base no volume de registros, sugerindo dicas para equilibrar seu jogo.

---

## 🛠️ Stack Tecnológica

* **Frontend:** React (Vite)
* **Backend:** NestJS (Node.js), TypeScript.
* **Banco de Dados:** PostgreSQL.
* **ORM:** TypeORM.

---

## 📑 Estrutura de Telas (MVP)

| Tela | Descrição |
| :--- | :--- |
| **Dashboard** | Resumo da "saúde" do jogo, gráficos de domínio e alertas de revisão. |
| **Logbook** | Histórico cronológico de treinos, aulas e seminários. |
| **Technique Vault** | Biblioteca pessoal com o nível de maestria em cada posição. |
| **Flow Builder** | Interface de arrastar e soltar para montar seu mapa de estratégia. |
| **Profile** | Definição de faixa, graus, peso e estilo de jogo preferencial. |

---

## 🗄️ Estrutura de Dados Básica (Preview)

```typescript
// Exemplo de entidade de Técnica no Backend
interface Technique {
  id: string;
  name: string;
  category: 'Guard' | 'Passing' | 'Submission' | 'Takedown';
  positionStart: string; // Ex: Guarda Meia
  positionEnd: string;   // Ex: Passagem de Guarda
  masteryLevel: 1 | 2 | 3 | 4 | 5;
  lastPracticed: Date;
}