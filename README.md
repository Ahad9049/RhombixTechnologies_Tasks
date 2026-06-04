# 🐧 Linux Fundamentals for DevOps
**Rhombix Technologies Internship Task**
> Intern: Ubuntu AWS EC2 | Domain: DevOps

---

## 📋 Task Overview
Learn Linux fundamentals essential for DevOps — file navigation, permissions, system monitoring, and package management — using an AWS Ubuntu EC2 instance.

---

## ✅ Steps Completed

### Step 1 — File Navigation
```bash
pwd        # /home/ubuntu
whoami     # ubuntu
hostname   # ip-172-31-34-111
ls -la     # listed home directory contents
```
**Result:** Successfully navigated the file system and identified user/host details.

---

### Step 2 — Creating Directories & Files
```bash
mkdir RhombixTechnologies_Tasks
cd RhombixTechnologies_Tasks
mkdir linux_basics notes scripts
touch notes/day1.txt scripts/myscript.sh
ls -R
```
**Result:** Created project folder structure with subfolders and files.

```
RhombixTechnologies_Tasks/
├── linux_basics/
├── notes/
│   └── day1.txt
└── scripts/
    └── myscript.sh
```

---

### Step 3 — Editing Files
```bash
echo "Day 1: Learning Linux basics for DevOps" > notes/day1.txt
echo "Practiced pwd, ls, mkdir, touch commands" >> notes/day1.txt
echo "Set up AWS Ubuntu EC2 instance" >> notes/day1.txt
cat notes/day1.txt
```
**Result:** File created and populated with notes. Learned `>` (overwrite) vs `>>` (append).

---

### Step 4 — Managing Permissions
```bash
chmod +x scripts/myscript.sh     # make executable
chmod 644 notes/day1.txt         # owner rw, others r
chmod 755 scripts/myscript.sh    # owner rwx, others rx
chown $USER:$USER notes/day1.txt
ls -l notes/ scripts/
```
**Result:** Script turned executable (green highlight in terminal). Permissions applied correctly.

| Permission | Meaning |
|-----------|---------|
| `644` | Owner: read/write — Others: read only |
| `755` | Owner: full — Others: read + execute |
| `+x` | Add execute permission |

---

### Step 5 — Checking System Resources
```bash
lscpu       # Intel Xeon Platinum 8259CL @ 2.50GHz, 2 CPUs
free -h     # Total: 908Mi, Used: 313Mi, Free: 373Mi
df -h       # Root: 6.7G total, 2.1G used (31%)
top -bn1    # 112 tasks, 91.3% CPU idle
uptime      # Up 20 min, load avg: 0.00
uname -a    # Linux kernel 7.0.0-1004-aws
ip addr show  # Private IP: 172.31.34.111
ss -tuln    # SSH port 22 listening
```
**Result:** Full system resource overview gathered from live AWS EC2 instance.

---

### Step 6 — Installing & Managing Packages
```bash
sudo apt update                                    # Fetched 32.5MB, 54 package lists
sudo apt install -y curl wget git tree net-tools htop
git --version    # git version 2.53.0
tree --version   # tree v2.3.1
htop --version   # htop 3.4.1
tree             # visualized project structure
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx   # active (running) ✅
sudo apt remove -y nginx
sudo apt autoremove -y
```
**Result:** Packages installed, verified, nginx started & enabled successfully, then cleaned up.

---

## 🖥️ System Info Summary

| Property | Value |
|---------|-------|
| OS | Ubuntu 26.04 LTS (Resolute Raccoon) |
| Kernel | Linux 7.0.0-1004-aws |
| CPU | Intel Xeon Platinum 8259CL @ 2.50GHz |
| RAM | 908 MB |
| Disk | 6.7 GB (31% used) |
| Private IP | 172.31.34.111 |

---

## 📦 Tools Installed

| Tool | Version | Purpose |
|------|---------|---------|
| git | 2.53.0 | Version control |
| curl | 8.18.0 | HTTP requests |
| wget | 1.25.0 | File downloads |
| tree | 2.3.1 | Directory visualization |
| htop | 3.4.1 | Process monitoring |
| net-tools | 2.10 | Network utilities |
| nginx | latest | Web server (installed & removed) |

---

## 🔑 Key Concepts Learned

- Linux file system navigation with `pwd`, `ls`, `cd`
- File and directory creation with `mkdir`, `touch`, `echo`
- File permissions with `chmod` and ownership with `chown`
- System monitoring with `lscpu`, `free`, `df`, `top`, `uptime`
- Package management with `apt` — install, update, remove
- Service management with `systemctl` — start, enable, status

---

*Completed on AWS Ubuntu EC2 | Rhombix Technologies DevOps Internship*
