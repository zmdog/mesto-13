const ERROR_VALIDATION = 400;
const ERROR_CAST = 404;
const ERROR_DEFAULT = 505;
class ApiError extends Error {
  instanceOf(res, err) {
    if (err.name === 'ValidationError') {
      return res.status(ERROR_VALIDATION)
        .send(
          {
            message: 'переданы некорректные данные в методы создания карточки, пользователя, обновления аватара пользователя или профиля',
          },
        );
    }
    if (err.name === 'CastError') {
      return res.status(ERROR_CAST)
        .send(
          {
            message: 'карточка или пользователь не найден или был запрошен несуществующий роут',
          },
        );
    }
    return res.status(ERROR_DEFAULT)
      .send(
        {
          message: 'На сервере произошла ошибка',
        },
      );
  }
}

module.exports = { ApiError };
