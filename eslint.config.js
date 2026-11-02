import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier/flat'

export default defineConfig(
  globalIgnores(['dist']),
  js.configs.recommended,
   // Permite leer typeScript y añade sus reglas recomendadas
  tseslint.configs.recommended,
 // Va al final para apagar las reglas que chocan con Prettier
  prettier,
)