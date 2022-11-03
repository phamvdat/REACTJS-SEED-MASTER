# Workaround for Windows 10, Git Bash and Yarn
if [ -t 2 ]; then
  exec >/dev/tty 2>&1
fi
