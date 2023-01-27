from subprocess import run
import os

def pytest_configure(config):
    """
    Allows plugins and conftest files to perform initial configuration.
    This hook is called for every plugin and initial conftest
    file after command line options have been parsed.
    """
    # start minio container
    current_path = os.path.dirname(os.path.abspath(__file__))
    minio_path = os.path.normpath(os.path.join(current_path, '../../infra/local/minio'))
    cmd = ["podman-compose", "-f", "minio.yml", "up", "-d"]
    run(cmd, cwd=minio_path)


def pytest_sessionstart(session):
    """
    Called after the Session object has been created and
    before performing collection and entering the run test loop.
    """
    

def pytest_sessionfinish(session, exitstatus):
    """
    Called after whole test run finished, right before
    returning the exit status to the system.
    """
    

def pytest_unconfigure(config):
    """
    called before test process is exited.
    """
    # shutdown minio container
    current_path = os.path.dirname(os.path.abspath(__file__))
    minio_path = os.path.normpath(os.path.join(current_path, '../../infra/local/minio'))
    cmd = ["podman-compose", "-f", "minio.yml", "down"]
    run(cmd, cwd=minio_path)