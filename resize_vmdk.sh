vboxmanage clonehd "virtualdisk.vmdk" "new-virtualdisk.vdi" --format vdi && vboxmanage modifyhd "new-virtualdisk.vdi" --resize 30720
