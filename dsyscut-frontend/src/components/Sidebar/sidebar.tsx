import { useState } from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Avatar,
    Typography,
    Box,
    Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import style from './style.module.css';

const dashboardTabs = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Financeiro', icon: <AttachMoneyIcon /> },
    { text: 'Agendamento', icon: <CalendarTodayIcon /> },
    { text: 'Clientes', icon: <PeopleIcon /> },
    { text: 'Relatórios', icon: <BarChartIcon /> },
    { text: 'Pacotes', icon: <CardGiftcardIcon /> },
    { text: 'Info', icon: <InfoIcon /> },
];

const accountTabs = [
    { text: 'Configs', icon: <SettingsIcon /> },
    { text: 'Notificações', icon: <NotificationsIcon /> },
    { text: 'Log out', icon: <LogoutIcon /> },
];

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [selectedTab, setSelectedTab] = useState('Home');

    // Responsividade: Drawer para mobile, mini-sidebar para desktop
    // Mini sidebar: apenas ícones, largura reduzida
    return (
        <>
            {/* Hamburger para mobile e mini-sidebar */}
            {!open && (
                <IconButton
                    onClick={() => setOpen(true)}
                    className={style.menuButton}
                    sx={{
                        position: 'fixed',
                        top: 16,
                        left: 16,
                        zIndex: 1300,
                        color: 'var(--color-primary)',
                        background: 'var(--color-background-paper)',
                        boxShadow: 2,
                        borderRadius: 2,
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            {/* Mini sidebar para desktop */}
            {!open && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: 64,
                        background: 'var(--color-background-paper)',
                        borderRight: '1px solid var(--color-border)',
                        boxShadow: 2,
                        zIndex: 1200,
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        alignItems: 'center',
                        py: 2,
                        gap: 1,
                        transition: 'width 0.3s'
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            mb: 2,
                            color: 'var(--color-primary)',
                            background: 'var(--color-background)',
                            borderRadius: 2,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Divider sx={{ width: '80%' }} />
                    {dashboardTabs.map(tab => (
                        <Tooltip title={tab.text} placement="right" key={tab.text}>
                            <IconButton sx={{
                                color: 'var(--color-primary)',
                                my: 0.5,
                                width: 40,
                                height: 40,
                                '&:hover': { bgcolor: 'var(--color-background)' }
                            }}>
                                {tab.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                    <Divider sx={{ width: '80%', my: 1 }} />
                    {accountTabs.map(tab => (
                        <Tooltip title={tab.text} placement="right" key={tab.text}>
                            <IconButton sx={{
                                color: 'var(--color-secondary)',
                                my: 0.5,
                                width: 40,
                                height: 40,
                                '&:hover': { bgcolor: 'var(--color-background)' }
                            }}>
                                {tab.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Perfil" placement="right">
                        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" sx={{ width: 32, height: 32, mb: 2 }} />
                    </Tooltip>
                </Box>
            )}

            {/* Sidebar Drawer para mobile */}
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                variant="temporary"
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 240,
                        background: 'var(--color-background-paper)',
                        color: 'var(--color-text)',
                        borderRight: '1px solid var(--color-border)',
                        boxSizing: 'border-box',
                        transition: 'width 0.3s',
                    }
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: 1
                        }}>
                            <Box sx={{
                                width: 32, height: 32, bgcolor: 'var(--color-primary)', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>D</Typography>
                            </Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>DsysCut</Typography>
                        </Box>
                        <IconButton onClick={() => setOpen(false)} sx={{ color: 'var(--color-primary)' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    <Box sx={{ flex: 1 }}>
                        <List>
                            {dashboardTabs.map(tab => (
                                <ListItem
                                    disableGutters
                                    key={tab.text}
                                    onClick={() => setSelectedTab(tab.text)}
                                    sx={{
                                        borderRadius: 0,
                                        px: 2,
                                        py: 1,
                                        my: 0.5,
                                        cursor: 'pointer',
                                        background: selectedTab === tab.text ? 'rgba(35,69,103,0.08)' : 'transparent',
                                        borderLeft: selectedTab === tab.text ? '4px solid var(--color-primary)' : '4px solid transparent',
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                                        fontWeight: selectedTab === tab.text ? 600 : 400,
                                        transition: 'background 0.2s, border-color 0.2s',
                                        '&:hover': {
                                            background: 'rgba(35,69,103,0.04)',
                                            color: 'var(--color-primary)'
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 36,
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-secondary)'
                                    }}>
                                        {tab.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tab.text}
                                        primaryTypographyProps={{
                                            fontWeight: selectedTab === tab.text ? 600 : 400,
                                            fontSize: 16
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <List>
                            {accountTabs.map(tab => (
                                <ListItem
                                    disableGutters
                                    key={tab.text}
                                    onClick={() => setSelectedTab(tab.text)}
                                    sx={{
                                        borderRadius: 0,
                                        px: 2,
                                        py: 1,
                                        my: 0.5,
                                        cursor: 'pointer',
                                        background: selectedTab === tab.text ? 'rgba(35,69,103,0.08)' : 'transparent',
                                        borderLeft: selectedTab === tab.text ? '4px solid var(--color-primary)' : '4px solid transparent',
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                                        fontWeight: selectedTab === tab.text ? 600 : 400,
                                        transition: 'background 0.2s, border-color 0.2s',
                                        '&:hover': {
                                            background: 'rgba(35,69,103,0.04)',
                                            color: 'var(--color-primary)'
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 36,
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-secondary)'
                                    }}>
                                        {tab.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tab.text}
                                        primaryTypographyProps={{
                                            fontWeight: selectedTab === tab.text ? 600 : 400,
                                            fontSize: 16
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{
                        p: 2,
                        borderTop: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        background: 'rgba(35,69,103,0.04)'
                    }}>
                        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" sx={{ width: 40, height: 40, mr: 1 }} />
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--color-primary)' }}>Nina Ergemla</Typography>
                            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)' }}>nina.ergemla@email.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Drawer>

            {/* Sidebar completo para desktop */}
            {open && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: 280,
                        background: 'var(--color-background-paper)',
                        color: 'var(--color-text)',
                        borderRight: '1px solid var(--color-border)',
                        boxShadow: 2,
                        zIndex: 1200,
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        transition: 'width 0.3s'
                    }}
                >
                    <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between' }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: 1
                        }}>
                            <Box sx={{
                                width: 32, height: 32, bgcolor: 'var(--color-primary)', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>D</Typography>
                            </Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>DsysCut</Typography>
                        </Box>
                        <IconButton onClick={() => setOpen(false)} sx={{ color: 'var(--color-primary)' }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    <Box sx={{ flex: 1, overflowY: 'auto', px: 0 }}>
                        <List>
                            {dashboardTabs.map(tab => (
                                <ListItem
                                    disableGutters
                                    key={tab.text}
                                    onClick={() => setSelectedTab(tab.text)}
                                    sx={{
                                        borderRadius: 0,
                                        px: 3,
                                        py: 1,
                                        my: 0.5,
                                        cursor: 'pointer',
                                        background: selectedTab === tab.text ? 'rgba(35,69,103,0.08)' : 'transparent',
                                        borderLeft: selectedTab === tab.text ? '4px solid var(--color-primary)' : '4px solid transparent',
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                                        fontWeight: selectedTab === tab.text ? 600 : 400,
                                        transition: 'background 0.2s, border-color 0.2s',
                                        '&:hover': {
                                            background: 'rgba(35,69,103,0.04)',
                                            color: 'var(--color-primary)'
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 36,
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-secondary)'
                                    }}>
                                        {tab.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tab.text}
                                        primaryTypographyProps={{
                                            fontWeight: selectedTab === tab.text ? 600 : 400,
                                            fontSize: 16
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <List>
                            {accountTabs.map(tab => (
                                <ListItem
                                    disableGutters
                                    key={tab.text}
                                    onClick={() => setSelectedTab(tab.text)}
                                    sx={{
                                        borderRadius: 0,
                                        px: 3,
                                        py: 1,
                                        my: 0.5,
                                        cursor: 'pointer',
                                        background: selectedTab === tab.text ? 'rgba(35,69,103,0.08)' : 'transparent',
                                        borderLeft: selectedTab === tab.text ? '4px solid var(--color-primary)' : '4px solid transparent',
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                                        fontWeight: selectedTab === tab.text ? 600 : 400,
                                        transition: 'background 0.2s, border-color 0.2s',
                                        '&:hover': {
                                            background: 'rgba(35,69,103,0.04)',
                                            color: 'var(--color-primary)'
                                        }
                                    }}
                                >
                                    <ListItemIcon sx={{
                                        minWidth: 36,
                                        color: selectedTab === tab.text ? 'var(--color-primary)' : 'var(--color-secondary)'
                                    }}>
                                        {tab.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={tab.text}
                                        primaryTypographyProps={{
                                            fontWeight: selectedTab === tab.text ? 600 : 400,
                                            fontSize: 16
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{
                        p: 2,
                        borderTop: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        background: 'rgba(35,69,103,0.04)'
                    }}>
                        <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" sx={{ width: 40, height: 40, mr: 1 }} />
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--color-primary)' }}>Nina Ergemla</Typography>
                            <Typography variant="caption" sx={{ color: 'var(--color-text-secondary)' }}>nina.ergemla@email.com</Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
}
