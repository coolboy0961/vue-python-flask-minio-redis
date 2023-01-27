
import os
import glob
from src.infrastructure.MinioClient import MinioClient
from tests.test_utils import get_file_size

class Test:
    def setup_method(self, test_method):
        """setup any state tied to the execution of the given method in a
        class.  setup_method is invoked for every test method of a class.
        """
        print("setup")
        minio_client = MinioClient()
        minio_client.remove_all_objects("users")


    def teardown_method(self, test_method):
        """teardown any state that was previously setup with a setup_method
        call.
        """
        print("tear down")
        minio_client = MinioClient()
        minio_client.remove_all_objects("users")
        current_path = os.path.dirname(os.path.abspath(__file__))
        download_path = os.path.normpath(os.path.join(current_path, 'download'))

        pattern = download_path + "/*.jpg"
        files = glob.glob(pattern)
        for file in files:
            os.remove(file)

    def test_ファイルを正しくアップロードできること(self):
        # Arrange
        current_path = os.path.dirname(os.path.abspath(__file__))
        upload_path = os.path.normpath(os.path.join(current_path, 'upload'))
        download_path = os.path.normpath(os.path.join(current_path, 'download'))
        expected_file_path = upload_path + '/testfile.jpg'
        expected_file_size = get_file_size(expected_file_path)

        # Act
        target = MinioClient()
        target.upload(
            'users', upload_path, 'testfile.jpg')
        target.download(
            'users', download_path, 'testfile.jpg')
        actual_file_path = download_path + '/testfile.jpg'
        actual_file_size = get_file_size(actual_file_path)

        # Assert
        assert expected_file_size == actual_file_size