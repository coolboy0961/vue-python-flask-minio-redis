from src.application.usecases.UserUsecase import UserUsecase
from src.domain.model.User import User
from src.infrastructure.FlakeInterfaceAdapter import ControllerRequest


class UserResponse:
    def __init__(self, id: int, name: str, email: str) -> None:
        self.id = id
        self.name = name
        self.email = email


class UserController:
    def get(self, request: ControllerRequest) -> list[UserResponse]:
        print("request.__dict__")
        print(request.__dict__)

        user_usecase = UserUsecase()
        users = user_usecase.get_users()
        return self.convert_user_to_user_response(users)

    def convert_user_to_user_response(self, users: list[User]) -> list[UserResponse]: 
      user_reponses = []
      for user in users:
        new_user_reponse = UserResponse(user.id, user.name, user.email)
        user_reponses.append(new_user_reponse)
      return user_reponses
