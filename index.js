import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://xizdiqbbjvdrclcseweu.supabase.co', 'sb_publishable_mZmo_2LWttK9X9-0_Fsj5A_GLpPmXvU')

async function registre() {
  const nom = document.getElementById("nom").value
  const prenom = document.getElementById("prenom").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: { first_name: prenom, last_name: nom }
    }
  })
  alert("compte crée avec succès ")
}