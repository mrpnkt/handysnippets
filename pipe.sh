cat file | xargs -I{} -d"\n" command --option {} other args
