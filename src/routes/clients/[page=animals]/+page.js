/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    animal: params.page
  };
}
