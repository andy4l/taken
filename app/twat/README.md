Steps for the TWAT directory:
twat/page.js - Main page of twat, this will display the most recent TWAT,
TODO: - When page loads, use a useEffect hook to make a call to the twat API to fetch the most recent one - Make an API route to fetch the most recent TWAT

twat/new/page.js - Page to create a new TWAT, this will make a POST request to api/twat
This will be a form where the data for the POST request is input. After the form is submited it will make a POST request to api/twat.
WHen the

After TWAT is created, api/twat will return the TWAT object and page will be redirected to that twat to make updates if needed

TwatCustom
| id | twatId | title | content |
