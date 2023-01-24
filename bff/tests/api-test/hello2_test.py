import requests

base_url="http://127.0.0.1:5000"

def test_normal():
    """
    / にアクセスして正常なレスポンスを返すこと
    """
    # Arrange
    expected = "Hello, World!"

    # Act
    response = requests.get(url=base_url + "/")

    # Assert
    assert response.status_code == 200
    assert response.text == expected
