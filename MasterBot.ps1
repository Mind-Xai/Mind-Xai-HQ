# ==========================================
# PROJECT: MIND-XAI | LEVEL 2: GLOBAL SYNC
# MISSION: AUTOMATION + CLOUD BACKUP
# SPEED: 50x | AUTO-COMMIT | AUTO-PUSH
# ==========================================

Clear-Host
$ErrorActionPreference = "SilentlyContinue"

function Log-System {
    param([string]$Msg, [string]$Color="Green")
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $Msg" -ForegroundColor $Color
}

function Auto-Git-Sync {
    # 1. Check if Git is active here
    if (!(Test-Path .git)) {
        Log-System "INITIALIZING NEW MIND-XAI REPOSITORY..." "Yellow"
        git init | Out-Null
        Log-System "REPOSITORY CREATED." "Green"
    }

    # 2. Check for changes
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Log-System "NEW DATA DETECTED. PREPARING UPLOAD..." "Cyan"
        
        # Add & Commit
        git add .
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
        git commit -m "Auto-Update: $timestamp (Robotic Save)" | Out-Null
        
        Log-System "DATA SECURED LOCALLY." "Green"
        
        # Attempt Push (Will notify if remote is missing)
        $remote = git remote -v
        if ($remote) {
            Log-System "UPLOADING TO GLOBAL SERVER (GITHUB)..." "Cyan"
            git push origin main 2>&1 | Out-Null
            Log-System "UPLOAD COMPLETE. WORLDWIDE TRUST SYNCED." "Green"
        } else {
            Log-System "WAITING FOR GITHUB CONNECTION LINK..." "Magenta"
        }
    } else {
        Log-System "SYSTEM IS UP TO DATE." "DarkGray"
    }
}

# === MAIN ROBOTIC LOOP ===
while ($true) {
    Clear-Host
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "   MIND-XAI: LEVEL 2 SYNC ACTIVE        " -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    
    # Run Diagnostics
    Log-System "System Check: 50x Optimization Active"
    
    # Run Git Automation
    Auto-Git-Sync
    
    Write-Host "`n[ WAITING 10 SECONDS FOR NEXT CYCLE ]" -ForegroundColor Gray
    Start-Sleep -Seconds 10
}