def test_normal(bash):
    """
    /users にアクセスして正常なレスポンスを返すこと
    """
    # Arrange
    expected = \
        'python batch.py 1' + "\n" \
        'Number of arguments: 2 arguments.' + "\n" \
        "Argument List: ['batch.py', '1']" + "\n" \
        'job id: 1 started.' + "\n" \
        '[{"id": 1, "name": "TestUser1", "email": "testuser1@test.com"}, {"id": 2, "name": "TestUser2", "email": "testuser2@test.com"}, {"id": 3, "name": "TestUser3", "email": "testuser3@test.com"}]' + "\n" \
        'job id: 1 ended.'

    # Act
    actual = bash.run_script("make", ["run-users"])

    # Assert
    assert actual == expected
