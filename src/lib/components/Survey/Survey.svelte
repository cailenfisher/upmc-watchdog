<script>
    import Text from "./Text.svelte";
</script>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="py-6">
      <h1
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-4xl dark:text-white"
      >
        Western Maryland Emergency Room Complaints
      </h1>
    </div>
    <div class="grid gap-16 lg:grid-cols-3">
      <div class="hidden lg:block">
        <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          About this project
        </h3>
        Some information about the intention and how the information will be used.
      </div>
      <div class="col-span-2">
        <h2
          class="mb-4 text-xl tracking-tight font-extrabold text-gray-900 lg:mb-8 md:text-2xl dark:text-white"
        >
          Patient experience survey
        </h2>
        <form action="#" class="space-y-8">
          <div>
            <Text name="first_name" label="First Name" required="required" />
          </div>
          <div>
            <Text name="last_name" label="Last name (optional)" />
          </div>
          <div>           
           <label for="visit_length">Length of time in ER</label>
            <input type="number" name="visit_date" id="visit_date" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
          </div>
          <div>
            <label for="visit_date">Month and year of visit</label>
            <input type="month" name="visit_date" id="visit_date" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
          </div>
          <div class="sm:col-span-2">
            <label
              for="issue"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Description of issue</label
            >
            <textarea
              id="issue"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Summary of what brought you to the ER"
            ></textarea>
            <div class="mt-4">
              <div>
                <input
                id="correct_diagnosis"
                type="checkbox"
                value=""
                class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="correct_diagnosis"
                class="ml-2"
                >
                Correct diagnosis</label
              >
              </div>
              <input
                id="correct_medication"
                type="checkbox"
                value=""
                class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="correct_medication"
                class="ml-2"
                >
                Correct medication given</label
              >
            </div>
            <div>
                <input
                id="issue_resolved"
                type="checkbox"
                value=""
                class="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="issue_resolved"
                class="ml-2"
                >
                Medical issue resolved</label
              >
            </div>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >Send my Survey</button
          >
        </form>
      </div>
    </div>
  </div>
</section>
