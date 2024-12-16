// opengl 3.3

// v_pos - in vector 2d
// fragColor - out vector 4d

// center - vector 2d
// scale - float
// iterations - int

void main() {
    vec2 z = v_pos * scale + center;
    vec2 zm = vec2(0.0);
    vec2 zp;
    vec2 zpt;
    vec2 k = vec2(0.1, 0.4);// Константа для трансформации
    vec2 c = vec2(-0.9, 0.27015);// Константа для фрактала
    float l = 0.0;

    for (l = 0.0; l < float(iterations); l += 1.0) {
        zp = mat2(k, -k.y, k.x) * zm;
        zpt = mat2(z, -z.y, z.x) * z + c + zp;
        if (dot(z, z) > 65536.0) break;
        zm = z;
        z = zpt;
    }

    l = l - log2(log2(dot(z, z))) + 4.0;
    if (dot(z, z) < 65536.0) l = float(iterations);
    fragColor = vec4(vec3(sqrt(l / 100.0)) * vec3(1.4, 0.4, 0.2), 1.0);
}