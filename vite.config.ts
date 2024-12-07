import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   port:3003,
  //   //host:'0.0.0.0',
  // },
  base: '/Site_Criptmoedas/'
})
