// opengl 3.3

// v_pos - in vector 2d
// fragColor - out vector 4d

// center - vector 2d
// scale - float
// iterations - int

void main() {
    vec2 z = v_pos * scale + center;
    vec2 c = z;
    int iter;
    for (iter = 0; iter < iterations; iter++) {
        if (dot(z, z) > 4.0) break;
        z = vec2(abs(z.x) * abs(z.x) - abs(z.y) * abs(z.y), 2.0 * abs(z.x) * abs(z.y)) + c;
    }
    float color = float(iter) / float(iterations);
    fragColor = vec4(color * 0.8, color * 0.4, color * 0.1, 1.0);
}
