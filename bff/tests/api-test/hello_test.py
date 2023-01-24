from app import create_app


def test_normal(client):
    """
    / にアクセスして正常なレスポンスを返すこと
    """
    # Arrange
    expected = b"Hello, World!"

    # Act
    response = client.get("/")

    # Assert
    assert response.status_code == 200
    assert response.data == expected
