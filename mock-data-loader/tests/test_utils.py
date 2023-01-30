import os


def get_file_size(path: str):
    file_stats = os.stat(path)
    print(f'File Size in Bytes is {file_stats.st_size}')
    return file_stats.st_size
