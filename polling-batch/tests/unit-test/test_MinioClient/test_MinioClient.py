
import os
from src.infrastructure.MinioClient import MinioClient

class Test:
    def setup_method(self, test_method):
        """setup any state tied to the execution of the given method in a
        class.  setup_method is invoked for every test method of a class.
        """
        minio_client = MinioClient()
        minio_client.remove_all_objects("users")


    def teardown_method(self, test_method):
        """teardown any state that was previously setup with a setup_method
        call.
        """
        minio_client = MinioClient()
        minio_client.remove_all_objects("users")

    def test_ファイルを正しくアップロードできること(self, image_diff):
        # Arrange
        current_path = os.path.dirname(os.path.abspath(__file__))
        upload_path = os.path.normpath(os.path.join(current_path, 'upload'))
        download_path = os.path.normpath(os.path.join(current_path, 'download'))
        expected = upload_path + '/testfile.jpg'

        # Act
        target = MinioClient()
        target.upload(
            'users', upload_path, 'testfile.jpg')
        target.download(
            'users', download_path, 'testfile.jpg')
        actual = download_path + '/testfile.jpg'
        # Assert
        assert image_diff(expected, actual)