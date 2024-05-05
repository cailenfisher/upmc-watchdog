import { error } from "@sveltejs/kit";
import { supabase } from "../lib/supabaseClient";

export const actions = {
    default: async ({ request }) => {        
    const data = Object.fromEntries(await request.formData());      
    
      const result = await supabase.from('survey').insert(data)
        
      if (result.error) {
        console.error(result.error)
        throw error(500, {
          message: 'Error sending survey!'
        })
      } else {                
        return { success: true }
      }
    }
  }
  