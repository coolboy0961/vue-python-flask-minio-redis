import json
from src.domain.model.User import User
from src.infrastructure.FlakeInterfaceAdapter import ControllerRequest
from src.interface.controllers.UserController import UserController, UserResponse
from src.application.usecases.UserUsecase import UserUsecase

def test_get(mocker):
    """
    UserControllerのgetメソッドを呼び出して、正しい結果が帰ってくること
    """
    # Arrange
    expected = [
        UserResponse(1, "TestUser1", "testuser1@test.com"),
        UserResponse(2, "TestUser2", "testuser2@test.com"),
        UserResponse(3, "TestUser3", "testuser3@test.com"),
        UserResponse(4, "TestUser4", "testuser4@test.com")
    ]
    expected_json = json.dumps([ob.__dict__ for ob in expected])

    # UserUsecaseクラスのメンバーメソッドをモック
    mocker.patch.object(UserUsecase, "get_users", return_value=[
        User(1, "TestUser1", "testuser1@test.com"),
        User(2, "TestUser2", "testuser2@test.com"),
        User(3, "TestUser3", "testuser3@test.com"),
        User(4, "TestUser4", "testuser4@test.com")
    ])

    # Act
    target = UserController()
    request = ControllerRequest({}, {}, {})
    actual = target.get(request)
    actual_json = json.dumps([ob.__dict__ for ob in actual])

    # Assert
    assert actual_json == expected_json
