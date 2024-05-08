import { error } from "@sveltejs/kit";
import { supabase } from "../lib/supabaseClient";

export async function load({ params }) {
    try {
      let counter = await supabase
        .from('counter')
        .select('*', { count: 'exact', head: true })
          console.log(counter)
      return {
        counter: counter.count
      };
    } catch (e) {
      console.error("Fatal error loading application", e);
      if (e.status) {
        throw error(e.status, e.body.message);
      }
      throw error(500, "Error: " + e);
    }
  }
  
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
        // increment public counter
        await supabase.from('counter').insert({});
        return { success: true }
      }
    }
  }
  