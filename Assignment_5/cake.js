// mat= material cost
// bl= black forest, van= vanilla, red= red velvet,cho= chocolate, lem= lemon spange cake

// mat cost for each cake:

mat_bl = 150
mat_van = 160
mat_red = 170
mat_cho = 180
mat_lem = 190

// transport cost for per pound= tra

tra= 50

// utility cost per pound = uti

uti_bl = (mat_bl + tra)*(3/100)
uti_van = (mat_van + tra)*(3/100)
uti_red = (mat_red + tra)*(3/100)
uti_cho = (mat_cho + tra)*(3/100)
uti_lem = (mat_lem + tra)*(3/100)

// space cost per pound = spa
// staff cost per pound = sta

spa = 60
sta = 70

// per pound cost = pp

pp_bl = mat_bl + tra + uti_bl + spa + sta
pp_van = mat_van + tra + uti_van + spa + sta
pp_red = mat_red + tra + uti_red + spa + sta
pp_cho = mat_cho + tra + uti_cho + spa + sta
pp_lem = mat_lem + tra + uti_lem + spa + sta

 console.log("Answer-1")
 
console.log(pp_bl)
console.log(pp_van)
console.log(pp_red)
console.log(pp_cho)
console.log(pp_lem)

// quntity in pound = qun

qun_bl = 5
qun_van = 7
qun_red = 9
qun_cho = 11
qun_lem= 13

// total inventory cost = tot

tot_bl = pp_bl * qun_bl
tot_van = pp_van * qun_van
tot_red = pp_red * qun_red
tot_cho = pp_cho * qun_cho
tot_lem = pp_lem * qun_lem


console.log("Answer-2")

console.log(tot_bl)
console.log(tot_van)
console.log(tot_red)
console.log(tot_cho)
console.log(tot_lem)

// price = pr

pr_bl = 800
pr_van = 850
pr_red = 900
pr_cho = 950
pr_lem = 1000

// sell price after 13% discount = spde

spde_pr_bl = pr_bl - (pr_bl * (13/100))
spde_pr_van = pr_van - (pr_van * (13/100))
spde_pr_red = pr_red - (pr_red * (13/100))
spde_pr_cho = pr_cho - (pr_cho * (13/100))
spde_pr_lem = pr_lem - (pr_lem * (13/100))

console.log("Answer-3")

console.log(spde_pr_bl)
console.log(spde_pr_van)
console.log(spde_pr_red)
console.log(spde_pr_cho)
console.log(spde_pr_lem)

// profit per pound = pppo

pppo_bl = spde_pr_bl - pp_bl
pppo_van = spde_pr_van - pp_van
pppo_red = spde_pr_red - pp_red
pppo_cho = spde_pr_cho - pp_cho
pppo_lem = spde_pr_lem - pp_lem

console.log("Answer-4")
console.log(pppo_bl)
console.log(pppo_van)
console.log(pppo_red)
console.log(pppo_cho)
console.log(pppo_lem)

// total profit = totp

totp_bl = pppo_bl * qun_bl
totp_van = pppo_van * qun_van
totp_red = pppo_red * qun_red
totp_cho = pppo_cho * qun_cho
totp_lem = pppo_lem * qun_lem

console.log("Answer-5")
console.log(totp_bl)
console.log(totp_van)
console.log(totp_red)
console.log(totp_cho)
console.log(totp_lem)

// profit percentage = ppe

ppe_bl = (totp_bl / tot_bl)*100
ppe_van = (totp_van / tot_van)*100
ppe_red = (totp_red / tot_red)*100
ppe_cho = (totp_cho / tot_cho)*100
ppe_lem = (totp_lem / tot_lem)*100

console.log("Answer-6")

console.log(ppe_bl)
console.log(ppe_van)
console.log(ppe_red)
console.log(ppe_cho)
console.log(ppe_lem)
