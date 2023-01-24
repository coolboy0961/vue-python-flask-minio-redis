import json

from app import create_app


def test_normal(client):
    """
    /users にアクセスして正常なレスポンスを返すこと
    """
    # Arrange
    expected = bytes(json.dumps([
        {
            'id': 1,
            'name': 'TestUser1',
            'email': 'testuser1@test.com'
        },
        {
            'id': 2,
            'name': 'TestUser2',
            'email': 'testuser2@test.com'
        },
        {
            'id': 3,
            'name': 'TestUser3',
            'email': 'testuser3@test.com'
        }
    ]), "utf-8")

    # Act
    actual_response = client.get("/users")

    # Assert
    assert actual_response.status_code == 200
    print(actual_response.data)
    assert actual_response.data == expected
