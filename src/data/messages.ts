export interface Msg {
  id: number
  text: string
  scam: boolean
  kind: string
  why: string
}

export const REPO_URL = 'https://github.com/vivianne-moreira/web3-vr-seguranca-golpes'

export const messages: Msg[] = [
  {
    id: 1, scam: true, kind: 'Phishing',
    text: 'Digite suas 12 palavras de recuperação para reativar sua carteira.',
    why: 'Ninguém legítimo pede suas palavras de recuperação. Quem as tem controla seus ativos.'
  },
  {
    id: 2, scam: true, kind: 'Airdrop falso',
    text: 'Parabéns, você ganhou R$ 10.000 em tokens! Conecte sua carteira agora.',
    why: 'Prêmio inesperado com urgência para conectar a carteira é isca clássica de golpe.'
  },
  {
    id: 3, scam: false, kind: 'Legítima',
    text: 'Comprovante: Você transferiu 5 tokens para seu colega às 14h.',
    why: 'É apenas um comprovante de algo que você fez. Não pede dados nem ação.'
  }
]
