# NLW Agents

API desenvolvida durante o evento NLW da Rocketseat, replicada e ajustada com padrões de código e arquiteturas personalizadas para uso cotidiano.

## 🚀 Tecnologias

- **Node.js** com TypeScript nativo (--experimental-strip-types)
- **Fastify** - Framework web performático
- **Drizzle ORM** - ORM type-safe para PostgreSQL
- **PostgreSQL** com extensão pgvector
- **Zod** - Validação de schemas
- **Biome** - Linter e formatter (configurado com Ultracite)
- **Docker** - Containerização do banco de dados

## 📁 Estrutura do Projeto

```
src/
├── config.ts           # Configurações da aplicação
├── server.ts           # Entrada da aplicação
├── db/
│   ├── connection.ts   # Conexão com banco
│   ├── seed.ts         # Dados iniciais
│   ├── migrations/     # Migrações do banco
│   └── schema/         # Schemas do banco
└── http/
    └── routes/         # Rotas da API
```

## 🛠️ Setup e Configuração

### 1. Pré-requisitos

- Node.js 20+
- Docker e Docker Compose

### 2. Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### 3. Configuração do Banco de Dados

```bash
# Inicie o PostgreSQL com Docker
docker-compose up -d

# Execute as migrações
npx drizzle-kit migrate

# Execute o seed (opcional)
npm run seed
```

### 4. Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/agents
PORT=3333
CORS_ORIGIN=http://localhost:5173
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=agents
POSTGRES_PORT=5432
```

## 🏃‍♂️ Execução

```bash
# Desenvolvimento com watch mode
npm run dev

# Produção
npm start
```

A API estará disponível em `http://localhost:3333`

## 📚 Endpoints

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista todas as salas

## 🔧 Padrões e Convenções

- **ESLint/Prettier**: Configurado via Biome com preset Ultracite
- **Type Safety**: Validação com Zod em todas as rotas
- **Migrations**: Gerenciadas pelo Drizzle Kit
- **Naming**: snake_case para banco, camelCase para código
- **Architecture**: Separation of concerns com rotas organizadas

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia em modo desenvolvimento
- `npm start` - Inicia em modo produção
- `npm run seed` - Executa o seed do banco de dados
