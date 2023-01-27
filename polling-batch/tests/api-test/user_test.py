import requests
import json

base_url="http://127.0.0.1:5000"


def test_normal():
    """
    /users にアクセスして正常なレスポンスを返すこと
    """
    # Arrange
    expected = json.dumps([
        {
            "id": 1,
            "name": "TestUser1",
            "email": "testuser1@test.com"
        },
        {
            "id": 2,
            "name": "TestUser2",
            "email": "testuser2@test.com"
        },
        {
            "id": 3,
            "name": "TestUser3",
            "email": "testuser3@test.com"
        }
    ])

    # Act
    actual_response = requests.get(url=base_url + "/users")

    # Assert
    assert actual_response.status_code == 200
    print(actual_response.text)
    assert actual_response.text == expected
