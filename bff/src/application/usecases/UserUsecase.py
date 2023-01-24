from src.domain.model.User import User


class UserUsecase:
    def get_users(self) -> list[User]:
        return [User(1, "TestUser1", "testuser1@test.com"),
                User(2, "TestUser2", "testuser2@test.com"),
                User(3, "TestUser3", "testuser3@test.com"),]
