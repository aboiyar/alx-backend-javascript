/**
 * Contains the miscellaneous route handlers.
 * @author Moses Aboiyar <https://github.com/aboiyar>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello ALX!');
  }
}

export default AppController;
module.exports = AppController;
