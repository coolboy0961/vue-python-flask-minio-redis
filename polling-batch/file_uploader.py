from minio import Minio
from minio.error import S3Error


def main():
    # Create a client with the MinIO server playground, its access key
    # and secret key.
    client = Minio(
        "localhost:9000",
        access_key="root",
        secret_key="testpassword",
        secure=False
    )

    # Make 'users' bucket if not exist.
    found = client.bucket_exists("users")
    if not found:
        client.make_bucket("users")
    else:
        print("Bucket 'users' already exists")

    # Upload 'Xnip2023-01-17_16-11-05.jpg' as object name
    # 'Xnip2023-01-17_16-11-05.jpg' to bucket 'users'.
    client.fput_object(
        "users", "Xnip2023-01-17_16-11-05.jpg", "Xnip2023-01-17_16-11-05.jpg",
    )
    print(
        "'Xnip2023-01-17_16-11-05.jpg' is successfully uploaded as "
        "object 'Xnip2023-01-17_16-11-05.jpg' to bucket 'users'."
    )


if __name__ == "__main__":
    try:
        main()
    except S3Error as exc:
        print("error occurred.", exc)
