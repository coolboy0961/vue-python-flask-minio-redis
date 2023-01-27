from minio import Minio
from minio.error import S3Error
from minio.deleteobjects import DeleteObject


class MinioClient:
    def __init__(self) -> None:
        # Create a client with the MinIO server playground, its access key
        # and secret key.
        self.client = Minio(
            "localhost:9000",
            access_key="root",
            secret_key="testpassword",
            secure=False
        )

    def upload(self, bucket_name: str, file_path: str, file_name: str):
        self.client.fput_object(
            bucket_name, file_name, file_path + "/" + file_name,
        )

    def download(self, bucket_name: str, file_path: str, file_name: str):
        return self.client.fget_object(
            bucket_name, file_name, file_path + "/" + file_name,
        )

    def remove_all_objects(self, bucket_name: str):
        delete_object_list = map(
            lambda x: DeleteObject(x.object_name),
            self.client.list_objects(bucket_name, recursive=True),
        )
        errors = self.client.remove_objects(bucket_name, delete_object_list)
        for error in errors:
            print("error occurred when deleting object", error)

    def remove_bucket_if_exists(self, bucket_name: str):
        found = self.client.bucket_exists(bucket_name)
        if found:
            self.client.remove_bucket(bucket_name)
        else:
            print("Bucket" + bucket_name + " already exists.")

    def add_bucket_if_not_exists(self, bucket_name: str):
        found = self.client.bucket_exists(bucket_name)
        if not found:
            self.client.make_bucket(bucket_name)
        else:
            print("Bucket" + bucket_name + " already exists.")
