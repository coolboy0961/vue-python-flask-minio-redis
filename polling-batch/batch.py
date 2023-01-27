import sys

from src.interface.controllers.UserController import UserController

job_list = {
    "1": UserController().get
}


def start_batch_processing(job_id):
    if job_id in job_list:
        print("job id: " + job_id + " started.")
        job_list[job_id]({})
        print("job id: " + job_id + " ended.")
    else:
        print("job id: " + job_id + " doesn't exist.")


if __name__ == "__main__":
    print('Number of arguments:', len(sys.argv), 'arguments.')
    print('Argument List:', str(sys.argv))
    job_id = sys.argv[1]
    start_batch_processing(job_id)
